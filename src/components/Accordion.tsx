import { cva } from "class-variance-authority";
import { useTheme } from "./ThemeProvider";

interface AccordionProps {
  accordionEntries: { details: string; summary: string }[];
  accordionImages?: string[];
  onlyOneItemOpen?: boolean;
}

const accordionWrapperStyles = cva(
  "gap-space-m grid grid-cols-1 max-w-md md:grid-cols-2 rounded-md w-full bg-primary-100 group",
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

const accordionEntryStyles = cva(
  "border border-primary-200 dark:border-primary-700 rounded-sm details-content:h-0 details-content:overflow-hidden details-content:transition-[height,content-visibility] open:details-content:h-auto details-content:transition-discrete w-full",
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

const accordionSummaryStyles = cva(
  "cursor-pointer list-none px-space-s py-space-xs text-primary-900 dark:text-primary-100 font-medium",
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

const accordionDetailsStyles = cva(
  "px-space-s py-space-xs text-primary-700 dark:text-primary-300",
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
        "gradient-theme": "from-accent-400 to-accent-600 bg-linear-to-r",
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
    <div className={accordionWrapperStyles({ theme })}>
      <div>
        {accordionEntries.map(({ details, summary }, index) => (
          <details
            key={index}
            {...(onlyOneItemOpen && { name: "accordion-item" })}
            className={accordionEntryStyles({ theme })}
          >
            <summary className={accordionSummaryStyles({ theme })}>
              {summary}
            </summary>
            <div className={accordionDetailsStyles({ theme })}>{details}</div>
          </details>
        ))}
      </div>
      <div className={accordionImageStyles({ theme })}>
        {accordionImages &&
          accordionImages.map((src, index) => (
            <img
              key={index}
              src={src}
              // They are treated as decorative images, if they are not, consider passing a meaningful alt text
              alt={""}
              className={`object-cover rounded-skin h-full w-full transition-[opacity,transform] absolute inset-0 opacity-0 scale-110 group-has-[details:nth-child(${index + 1})[open]]:opacity-100 group-has-[details:nth-child(${index + 1})[open]]:scale-100`}
            />
          ))}
      </div>
    </div>
  );
};
