export const SectionTitle = ({ title, id }) => {
    return (
        <div
        id={id}
        className="grid place-items-center pb-6 pt-24 text-4xl sm:text-5xl font-bold text-secondary"
      >
        <h1>{title}</h1>
      </div>
    );
}