import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/format";

export function ProfileHeader({
  firstName,
  lastName,
  email,
  avatarUrl,
  statusLabel,
}: {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string | null;
  statusLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
      <Avatar className="size-20">
        <AvatarImage src={avatarUrl ?? undefined} alt="" />
        <AvatarFallback className="text-xl">
          {getInitials(`${firstName} ${lastName}`)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1.5">
        <h1 className="font-display text-2xl tracking-tighter">
          {firstName} {lastName}
        </h1>
        <p className="text-sm text-muted-foreground">{email}</p>
        <div>
          <Badge variant="success">{statusLabel}</Badge>
        </div>
      </div>
    </div>
  );
}
