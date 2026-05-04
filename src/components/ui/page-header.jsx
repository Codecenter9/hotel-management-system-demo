const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="border-b max-w-max border-gray-800 pb-3 mb-4">
      <h1 className="text-xl font-semibold text-gray-700 font-mono">{title}</h1>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
