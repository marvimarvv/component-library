import AddIconFilled from "@material-design-icons/svg/filled/add.svg";
import RemoveIconFilled from "@material-design-icons/svg/filled/remove.svg";
import AddIconRound from "@material-design-icons/svg/round/add.svg";
import RemoveIconRound from "@material-design-icons/svg/round/remove.svg";
import { cva } from "class-variance-authority";
import { useTheme } from "./ThemeProvider";

type AccordionProps = {
  accordionEntries: { details: string; summary: string }[];
} & (
  | { withImages?: never; oneItemOpen?: boolean }
  | {
      withImages: { images: string[]; fallbackImage?: string };
      oneItemOpen: true;
    }
);

const containerStyles =
  "gap-fluid-m grid grid-cols-1 max-w-md md:grid-cols-2 w-full group";

const accordionWrapperStyles = "w-full flex flex-col gap-fluid-s min-w-[300px]";

const accordionEntryStyles = cva(
  "group rounded-theme details-content:h-0 details-content:overflow-hidden open:details-content:h-auto details-content:transition-[height_150ms,content-visibility_150ms] details-content:transition-discrete w-full",
  {
    variants: {
      theme: {
        "gradient-theme": `bg-radial-[at_70%] from-primary-100 to-primary-300 dark:from-primary-500 dark:to-primary-700`,
        "neon-theme": `border-4 open:border-primary-300 open:dark:border-primary-700`,
      },
    },
    defaultVariants: {
      theme: "gradient-theme",
    },
  },
);

const accordionSummaryStyles = cva(
  "cursor-pointer list-none px-fluid-s py-fluid-xs flex items-start gap-2",
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

const accordionIconWrapperStyles = cva("relative shrink-0", {
  variants: {
    theme: {
      "gradient-theme": "w-5 h-5",
      "neon-theme": "w-6 h-6",
    },
  },
  defaultVariants: {
    theme: "gradient-theme",
  },
});

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

const accordionDetailsStyles = cva(
  "pl-[calc(30px + var(--spacing-fluid-s))] pr-fluid-s pb-fluid-s opacity-0 group-open:opacity-100 starting:group-open:opacity-0 transition-opacity duration-300",
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
  "h-30 rounded-theme w-full relative overflow-hidden aspect-square",
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

  const AddIcon = theme === "gradient-theme" ? AddIconRound : AddIconFilled;
  const RemoveIcon =
    theme === "gradient-theme" ? RemoveIconRound : RemoveIconFilled;

  return (
    <div className={containerStyles}>
      <div className={accordionWrapperStyles}>
        {accordionEntries.map(({ details, summary }, index) => (
          <details
            key={index}
            {...(oneItemOpen && { name: "accordion-item" })}
            className={accordionEntryStyles({ theme })}
          >
            <summary className={accordionSummaryStyles({ theme })}>
              <span className={accordionIconWrapperStyles({ theme })}>
                <AddIcon
                  className={`${accordionIconStyles({ theme })} opacity-100 group-open:opacity-0`}
                />
                <RemoveIcon
                  className={`${accordionIconStyles({ theme })} opacity-0 group-open:opacity-100`}
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
          {withImages.fallbackImage && (
            <img
              src={withImages.fallbackImage}
              alt={""}
              className={accordionFallbackImageStyles}
            />
          )}
        </div>
      )}
    </div>
  );
};
