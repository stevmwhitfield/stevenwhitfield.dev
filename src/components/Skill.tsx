import { TSkill } from "@/types";

const Skill = ({ icon, label }: TSkill) => {
  return (
    <div className="flex items-center gap-2">
      <i className={`${icon} text-2xl`} />
      <p>{label}</p>
    </div>
  );
};

export default Skill;
