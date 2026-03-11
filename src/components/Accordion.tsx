import { cva } from "class-variance-authority";
import { useTheme } from "./ThemeProvider";

interface AccordionProps {
  accordionEntries: { details: string; summary: string }[];
  accordionImages?: string[];
  onlyOneItemOpen?: boolean;
}

const accordionEntryStyles = cva(
  "border-primary-200 dark:border-primary-700 rounded-skin w-full",
  {
    variants: {
      theme: {
        "gradient-theme": ``,
        "neon-theme": ``,
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionImageStyles = cva(
  "h-30 rounded-skin w-full relative overflow-hidden aspect-square",
  {
    variants: {
      theme: {
        "gradient-theme":
          "from-accent-400 to-accent-600 bg-linear-to-r",
        "neon-theme": "bg-neon-theme-accent",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

export const Accordion = ({
  accordionEntries,
  accordionImages,
  onlyOneItemOpen,
}: AccordionProps) => {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme";
  };

  return (
    <div className="gap-space-m grid grid-cols-1 max-w-md md:grid-cols-2 rounded-md w-full bg-primary-100">
      <div className={`group ${accordionEntryStyles({ theme })}`}>
        {accordionEntries.map(({ details, summary }, index) => (
          <details
            key={index}
            {...(onlyOneItemOpen && { name: "accordion-item" })}
            className="details-content:h-0 details-content:overflow-hidden details-content:transition-[height,content-visibility] open:details-content:h-auto details-content:transition-discrete w-full"
          >
            <summary className="cursor-pointer font-medium px-space-s py-space-xs list-none ">
              {summary}
            </summary>
            <div className="dark:text-base-400 pb-space-s px-space-s text-base-500">
              {details}
            </div>
          </details>
        ))}
      </div>
      <div className={accordionImageStyles({ theme })}>
        {accordionImages &&
          accordionImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={""}
              className={`object-cover rounded-skin h-full w-full transition-[opacity,transform] absolute inset-0 opacity-0 scale-110 group-has-[details:nth-child(${index + 1})[open]]:opacity-100 group-has-[details:nth-child(${index + 1})[open]]:scale-100`}
            />
          ))}
      </div>
    </div>
  );
};
