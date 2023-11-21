const NotesPreview = ({ data, select }) => {
  const { id, applicationId, title, content } = data;

  const previewContent =
    content.length > 60 ? `${content.substring(0, 80)}...` : content;

  return (
    <button
      className="m-1 flex h-[60px] shrink-0 flex-col rounded-md bg-slate-600 p-1 hover:bg-slate-500"
      onClick={() => select(id)}
    >
      <h1 className=" text-sm ">{title}</h1>
      <h1 className="text-left text-[10px] ">{previewContent}</h1>
    </button>
  );
};

export default NotesPreview;
