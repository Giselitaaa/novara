"use client";

import { ImageIcon, Loader2, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const MAX_BYTES = 8 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

/**
 * Subida de archivos reutilizable: arrastrar y soltar, previsualización,
 * progreso y validación. Sube directo al almacenamiento con URL
 * prefirmada (`/api/upload`). Si el almacenamiento NO está configurado,
 * lo dice con claridad y deja el campo de URL manual — que además sirve
 * siempre para contenido externo (un vídeo alojado en otro sitio, etc.).
 */
export function FileUpload({
  value,
  onChange,
  folder = "uploads",
  accept = "image/*",
  label,
}: {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  accept?: string;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isImage =
    /^https?:\/\/.+\.(jpe?g|png|webp|gif)(\?|$)/i.test(value) ||
    value.startsWith("data:image");

  async function handleFile(file: File) {
    setError(null);
    if (accept.startsWith("image/") && !IMAGE_TYPES.includes(file.type)) {
      setError("Formato no permitido. Usa JPG, PNG, WEBP o GIF.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("El archivo supera el tamaño máximo (8 MB).");
      return;
    }

    setProgress(0);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type, size: file.size, folder }),
      });

      if (res.status === 503) {
        setProgress(null);
        setError(
          "El almacenamiento de archivos no está configurado en este entorno. Pega una URL más abajo."
        );
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setProgress(null);
        setError(data.error ?? "No se pudo preparar la subida.");
        return;
      }

      const { uploadUrl, publicUrl } = await res.json();

      // Subida directa con progreso vía XHR.
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", uploadUrl);
        xhr.setRequestHeader("Content-Type", file.type);
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () =>
          xhr.status < 300 ? resolve() : reject(new Error("PUT falló"));
        xhr.onerror = () => reject(new Error("Error de red"));
        xhr.send(file);
      });

      onChange(publicUrl);
      setProgress(null);
    } catch {
      setProgress(null);
      setError("No se pudo subir el archivo. Puedes pegar una URL en su lugar.");
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {label && <p className="text-sm font-medium">{label}</p>}

      {value && isImage && (
        <div className="relative w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element -- URL arbitraria de storage/externa */}
          <img
            src={value}
            alt=""
            className="h-28 w-auto rounded-md border border-border object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Quitar imagen"
            className="absolute -right-2 -top-2 rounded-full border border-border bg-background p-1 shadow-soft"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}

      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && inputRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (file) handleFile(file);
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center transition-colors",
          dragging ? "border-gold bg-gold/5" : "border-border hover:bg-muted/50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
        {progress !== null ? (
          <>
            <Loader2 className="size-5 animate-spin text-gold" />
            <p className="text-sm text-muted-foreground">Subiendo… {progress}%</p>
          </>
        ) : (
          <>
            {accept.startsWith("image/") ? (
              <ImageIcon className="size-5 text-muted-foreground" />
            ) : (
              <UploadCloud className="size-5 text-muted-foreground" />
            )}
            <p className="text-sm text-muted-foreground">
              Arrastra un archivo o{" "}
              <span className="font-medium text-foreground">haz clic</span> (máx. 8 MB)
            </p>
          </>
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-muted-foreground">
          o pega una URL (contenido externo)
        </label>
        <Input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://…"
        />
      </div>
    </div>
  );
}
