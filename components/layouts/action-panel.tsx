export function ActionPanel(props: {
  formSection: { subtext?: string; headline?: string };
  children?: any;
}) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {props.formSection.headline}
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{props.formSection.subtext}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
}
