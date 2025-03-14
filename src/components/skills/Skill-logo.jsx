export const SkillLogo = ({ logos, tooltip }) => {
    return (
        // <img src={logos} className="max-w-14 md:max-w-20" alt="" />
        <div className="tooltip tooltip-primary size-16 md:size-20 flex items-center justify-center" data-tip={tooltip}>
            <img src={logos} className="size-16 md:size-20" alt={tooltip} />
        </div>
    );
}