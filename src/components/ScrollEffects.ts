const interpolateHex = (colour1: string, colour2: string, p: number) => {
  const r1 = parseInt(colour1.substring(1, 3), 16);
  const g1 = parseInt(colour1.substring(3, 5), 16);
  const b1 = parseInt(colour1.substring(5, 7), 16);
  const o1 = parseInt(colour1.length == 9 ? colour1.substring(7, 9) : "ff", 16);

  const r2 = parseInt(colour2.substring(1, 3), 16);
  const g2 = parseInt(colour2.substring(3, 5), 16);
  const b2 = parseInt(colour2.substring(5, 7), 16);
  const o2 = parseInt(colour2.length == 9 ? colour2.substring(7, 9) : "ff", 16);

  const r = Math.round(r1 * (1 - p) + r2 * p);
  const g = Math.round(g1 * (1 - p) + g2 * p);
  const b = Math.round(b1 * (1 - p) + b2 * p);
  const o = Math.round(o1 * (1 - p) + o2 * p);

  return (
    "#" + r.toString(16) + g.toString(16) + b.toString(16) + o.toString(16)
  );
};

export const createHandleScroll =
  (
    scrollBoxes: string[],
    progressLength: number,
    NoProgress: string,
    Progress: string
  ) =>
  () => {
    const scrollHeights = scrollBoxes.map((id) => {
      const yPos =
        document.getElementById(id)?.getBoundingClientRect().top ?? 0;
      return yPos + window.scrollY;
    });

    // Reset all dots
    for (let i = 1; i < progressLength; i++) {
      const progressDiv = document.getElementById("progress" + i.toString());
      if (progressDiv) {
        const children =
          progressDiv.children as HTMLCollectionOf<HTMLDivElement>;

        for (const child of children) {
          child.style.backgroundColor = NoProgress;
        }
      }
    }

    let i = 0;
    while (scrollHeights[i] < window.scrollY) {
      if (i !== 0) {
        // Set all dots to Progress colour if we've past it
        const progressDiv = document.getElementById("progress" + i.toString());
        if (progressDiv) {
          const children =
            progressDiv.children as HTMLCollectionOf<HTMLDivElement>;

          for (const child of children) {
            child.style.backgroundColor = Progress;
          }
        }
      }

      i += 1;
    }
    if (i !== 0) {
      const initial = scrollHeights[i - 1];
      const final = scrollHeights[i] - initial;
      const percentProgress = (window.scrollY - initial) / final;

      // How much percent each dot is responsible for
      const dotPercentage = 1.0 / progressLength;

      const progressDiv = document.getElementById("progress" + i.toString());

      if (progressDiv) {
        const children =
          progressDiv.children as HTMLCollectionOf<HTMLDivElement>;

        let j = 0;
        while (percentProgress > dotPercentage * j && j < progressLength) {
          // Set past dots as full
          children[j].style.backgroundColor = Progress;
          j += 1;
        }

        if (j < progressLength) {
          // How far through this dot we are
          const littlePercentage =
            (percentProgress - dotPercentage * (j - 1)) / dotPercentage;

          // Set to a colour in between NoProgress and Progress
          children[j].style.backgroundColor = interpolateHex(
            NoProgress,
            Progress,
            littlePercentage
          );
        }
      }
    }
  };

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
