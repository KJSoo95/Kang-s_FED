const ControlMenu = ({ value, onChange, optionList }) => {
  return <select></select>;
};

const DiaryList = ({ diaryList }) => {
  return (
    <div>
      <ControlMenu />
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

export default DiaryList;
