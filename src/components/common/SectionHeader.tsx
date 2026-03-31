export default function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {label && (
        <span className="text-xs border px-3 py-1 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}