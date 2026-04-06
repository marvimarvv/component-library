import AddIconFilled from "@material-design-icons/svg/filled/add.svg";
import RemoveIconFilled from "@material-design-icons/svg/filled/remove.svg";
import AddIconRound from "@material-design-icons/svg/round/add.svg";
import RemoveIconRound from "@material-design-icons/svg/round/remove.svg";
import { cva } from "class-variance-authority";
import Icon from "./Icon";
import { useTheme } from "./ThemeProvider";

type AccordionProps = {
  accordionEntries: { details: string; summary: string }[];
} & (
  | { withImages?: never; oneItemOpen?: boolean }
  | {
      withImages: { images: string[] };
      oneItemOpen: true;
    }
);

const containerStyles =
  "gap-fluid-m grid grid-cols-1 md:grid-cols-2 w-full group";

const accordionWrapperStyles = "w-full flex flex-col gap-fluid-s min-w-[300px]";

const accordionEntryStyles = cva(
  "group rounded-theme details-content:h-0 details-content:overflow-hidden open:details-content:h-auto details-content:transition-[height_150ms,content-visibility_150ms] details-content:transition-discrete w-full text-fluid-s [--icon-size:1lh]",
  {
    variants: {
      theme: {
        "gradient-theme":
          "bg-radial-[at_50%_0%] from-primary-100 to-background dark:from-primary-900 open:bg-radial-[at_30%_0%] text-background-contrast transition-colors duration-300 border border-primary-100 dark:border-primary-900 open:border-primary-500 open:dark:border-primary-700",
        "neon-theme":
          "border-4 open:border-primary-300 open:dark:border-primary-700",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionSummaryStyles = cva(
  "cursor-pointer list-none px-fluid-s py-fluid-xs flex items-center gap-2",
  {
    variants: {
      theme: {
        "gradient-theme": ``,
        "neon-theme": "font-bold",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionDetailsStyles = cva(
  "pb-fluid-s opacity-0 group-open:opacity-100 starting:group-open:opacity-0 transition-opacity duration-300 text-fluid-xs",
  {
    variants: {
      theme: {
        "gradient-theme":
          "px-[calc(var(--spacing-fluid-s)+var(--icon-size)+8px)]",
        "neon-theme": "px-[calc(var(--spacing-fluid-s)+var(--icon-size)+8px)]",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionIconWrapperStyles = cva(
  "relative shrink-0 size-[var(--icon-size)] flex items-center",
  {
    variants: {
      theme: {
        "gradient-theme": "",
        "neon-theme": "",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionIconStyles = cva(
  "absolute inset-0 fill-current transition-opacity duration-200",
  {
    variants: {
      theme: {
        "gradient-theme": "",
        "neon-theme": "stroke-current stroke-[1.5]",
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionImageStyles = cva(
  "rounded-theme size-full relative overflow-hidden aspect-square",
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

const accordionImageItemStyles =
  "object-cover rounded-theme h-full w-full transition-[opacity,transform] duration-300 absolute inset-0 opacity-0 scale-110";

const accordionFallbackImageStyles = `${accordionImageItemStyles} group-[&:not(:has(details[open]))]:opacity-100 group-[&:not(:has(details[open]))]:scale-100`;

export const Accordion = ({
  accordionEntries,
  oneItemOpen,
  withImages,
}: AccordionProps) => {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme";
  };

  return (
    <div className={containerStyles}>
      <div className={accordionWrapperStyles}>
        {accordionEntries.map(({ details, summary }, index) => (
          <details
            key={index}
            {...(oneItemOpen && { name: "accordion-item" })}
            {...(oneItemOpen && index === 0 && { open: true })}
            className={accordionEntryStyles({ theme })}
          >
            <summary className={accordionSummaryStyles({ theme })}>
              <span className={accordionIconWrapperStyles({ theme })}>
                <Icon
                  filledIcon={AddIconFilled}
                  roundIcon={AddIconRound}
                  className={`${accordionIconStyles({ theme })} opacity-100 group-open:opacity-0`}
                  size={"100%"}
                />
                <Icon
                  filledIcon={RemoveIconFilled}
                  roundIcon={RemoveIconRound}
                  className={`${accordionIconStyles({ theme })} opacity-0 group-open:opacity-100`}
                  size={"100%"}
                />
              </span>
              {summary}
            </summary>
            <div className={accordionDetailsStyles({ theme })}>{details}</div>
          </details>
        ))}
      </div>
      {oneItemOpen && withImages && (
        <div className={accordionImageStyles({ theme })}>
          {withImages.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={""}
              className={`${accordionImageItemStyles} group-has-[details:nth-child(${index + 1})[open]]:opacity-100 group-has-[details:nth-child(${index + 1})[open]]:scale-100`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
