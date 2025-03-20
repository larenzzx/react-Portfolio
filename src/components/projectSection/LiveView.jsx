export const LiveView = ({ isLiveView }) => {
  if (isLiveView) {
    return (
      <a
        href="#"
        className="badge badge-outline flex items-center justify-center gap-x-1 py-3"
      >
        Live view
      </a>
    );
  }
};
