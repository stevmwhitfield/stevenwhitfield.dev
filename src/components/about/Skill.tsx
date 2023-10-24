interface Skill {
  icon: string;
  text: string;
}

const Skill = ({ icon, text }: Skill) => {
  return (
    <div className='flex items-center gap-2'>
      <i className={`${icon} text-2xl`} />
      <p>{text}</p>
    </div>
  );
};

export default Skill;
