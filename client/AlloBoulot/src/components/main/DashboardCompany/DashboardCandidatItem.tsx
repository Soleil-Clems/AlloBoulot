import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  FileText,
  FileSignature,
  BadgeCheck,
  CircleX,
  CalendarClock,
  Cog
} from "lucide-react";
import {
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { UpdateStatusRequest } from "@/request/jobapplicationRequest"

export type CandidatStatus = "pending" | "interview" | "accepted" | "rejected" | "test";

export type CandidatCard = {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  offerTitle: string;
  contractType: string;
  studyLevel: string;
  appliedAt: string;
  message: string;
  cvUrl?: string;
  motivationUrl?: string;
  status: CandidatStatus;
};

const STATUS_LABEL: Record<CandidatStatus, string> = {
  pending: "En attente",
  interview: "Entretien",
  accepted: "Accepté",
  rejected: "Refusé",
  test: "Test",
};

const STATUS_BADGE: Record<CandidatStatus, string> = {
  pending: "bg-blue-100 text-blue-700",
  interview: "bg-amber-100 text-amber-700",
  accepted: "bg-emerald-100 text-primary",
  rejected: "bg-red-100 text-red-700",
  test: "bg-purple-100 text-purple-700",
};

export default function DashboardCandidatItem({
  data,
}: {
  data: CandidatCard;
}) {
  const badgeClass = STATUS_BADGE[data.status] ?? STATUS_BADGE.pending;

  const queryClient = useQueryClient()


  const UpdateStatusMutation = useMutation({
    mutationFn: UpdateStatusRequest,
    onSuccess() {

      queryClient.invalidateQueries({ queryKey: ['candidatureList'] })
      queryClient.invalidateQueries({ queryKey: ['company-with-people'] })

    },
    onError(error) {

      console.log(error);

    },
  })

  const onUpdateStatus = (id: string | number, status: string) => {
  
    
    UpdateStatusMutation.mutate({ id: id, body: { status } })
  }

  return (
    <li className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{data.userName}</h3>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-muted-foreground">{data.appliedAt}</p>
          <span className={`text-xs px-2 py-1 rounded-full ${badgeClass}`}>
            {STATUS_LABEL[data.status] ?? STATUS_LABEL.pending}
          </span>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-medium">Poste : {data.offerTitle}</p>
        <p className="text-muted-foreground">
          {data.contractType} · {data.studyLevel}
        </p>
      </div>

      <p className="mt-3 line-clamp-3 text-sm">{data.message}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <a
          href={`mailto:${data.userEmail}`}
          className="inline-flex items-center gap-1 underline"
        >
          <Mail size={16} /> {data.userEmail}
        </a>
        <span className="text-muted-foreground">·</span>
        <a
          href={`tel:${data.userPhone}`}
          className="inline-flex items-center gap-1 underline"
        >
          <Phone size={16} /> {data.userPhone}
        </a>
      </div>

      <div className="flex flex-col gap-5">
        <div className="mt-4 flex gap-5">
          {data.cvUrl && (
            <Button asChild variant="outline" className="gap-2">
              <a href={data.cvUrl} target="_blank" rel="noreferrer">
                <FileText size={16} /> CV
              </a>
            </Button>
          )}
          {data.motivationUrl && (
            <Button asChild variant="outline" className="gap-2">
              <a href={data.motivationUrl} target="_blank" rel="noreferrer">
                <FileSignature size={16} /> Lettre
              </a>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-5 gap-3">
          <Button
            variant="outline"
            className="gap-2 border-blue-300 text-blue-700 hover:bg-blue-300 hover:text-black hover:border-transparent"
            onClick={() => onUpdateStatus(data.id, "pending")}
          >
            <CalendarClock size={16} /> En attente
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-amber-300 text-amber-700 hover:bg-amber-300 hover:text-black hover:border-transparent"
            onClick={() => onUpdateStatus(data.id, "interview")}
          >
            <CalendarClock size={16} /> Entretien
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-purple-300 text-purple-700 hover:bg-purple-700 hover:text-white  hover:border-transparent"
            onClick={() => onUpdateStatus(data.id, "test")}
          >
            <Cog size={16} /> Test
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-emerald-700 border-emerald-700 hover:bg-primary hover:text-white hover:border-transparent"
            onClick={() => onUpdateStatus(data.id, "accepted")}
          >
            <BadgeCheck size={16} /> Accepter
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-red-700 border-red-300 hover:bg-red-500 hover:text-white hover:border-transparent"
            onClick={() => onUpdateStatus(data.id, "rejected")}
          >
            <CircleX size={16} /> Refuser
          </Button>
        </div>
      </div>
    </li>
  );
}
