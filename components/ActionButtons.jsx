"use client";
import { addInterestedEvent } from "@/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interested_ids, going_ids, alignRight }) => {
  const router = useRouter();
  const { auth } = useAuth();
  const [isPending, startTransition] = useTransition();

  const isInterested = interested_ids.find((id) => id === auth?.id);
  const isGoing = going_ids.find((id) => id === auth?.id);
  const [interested, setInterested] = useState(isInterested);

  const handleToggleInterest = async () => {
    if (auth) {
      await addInterestedEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  };

  const handleGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}` );
    } else {
      router.push("/login");
    }
  };
  return (
    <div className={`w-full flex gap-4 mt-4 ${alignRight && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            handleToggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        {isPending ? "Loading..." : "Interested"}
      </button>

      <button
        disabled={auth && isGoing}
        onClick={handleGoing}
        className="w-full"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
