const PageHeader = ({ title, subtitle, noBorder }) => {
  return (
    <div
      className={`${noBorder ? "" : "border-b pb-3 mb-4"} max-w-max border-gray-800`}
    >
      <h1 className="text-xl font-semibold text-gray-700 font-mono">{title}</h1>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
