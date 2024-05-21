import Link from "next/link";

const ActionButtons = ({ alignRight }) => {
  return (
    <div className={`w-full flex gap-4 mt-4 ${alignRight && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <Link href="/payment" className=" py-2 px-2 rounded-md border border-[#5F5F5F]/50 bg-green-600 hover:bg-green-700 w-full inline-block text-center">
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
