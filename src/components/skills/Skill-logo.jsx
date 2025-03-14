export const SkillLogo = ({ logos, tooltip }) => {
  return (
    // <img src={logos} className="max-w-14 md:max-w-20" alt="" />
    <div
      className="tooltip tooltip-primary flex size-20 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.2)] bg-gray-400 bg-opacity-10 bg-clip-padding p-3 transition duration-300 ease-in hover:scale-105 hover:border-[rgba(255,255,255,0.5)] hover:bg-opacity-20 hover:shadow-lg md:size-28"
      data-tip={tooltip}
    >
      <img
        src={logos}
        className="size-20 object-contain md:size-24"
        alt={tooltip}
      />
    </div>
  );
};
