import React, { MouseEventHandler } from "react";
import * as S from "./styled";

export type LanguageFilterProps = {
  availableLanguages: string[];
  selectedLanguages: string[];
  setSelectedLanguages: React.Dispatch<React.SetStateAction<string[]>>;
};
export const LanguageFilter = ({
  availableLanguages,
  selectedLanguages,
  setSelectedLanguages,
}: LanguageFilterProps) => {
  return (
    <S.Wrapper>
      <S.Title>Languages</S.Title>
      <S.List>
        {
          availableLanguages?.map((e) => {
            const flip = () => {
              setSelectedLanguages((prev) => {
                const idx = prev.indexOf(e);
                console.log(e, idx);
                if (idx == -1) {
                  return [...prev, e];
                }
                let newArray = [...prev];
                newArray.splice(idx, 1);
                return newArray;
              });
            };

            const selected = selectedLanguages.indexOf(e) != -1;
            return (
              <>
                <S.ListItem
                  checked={selected}
                  onClick={(e) => {
                    e.stopPropagation();
                    flip();
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    aria-label={`display ${e} posts`}
                    onClick={(e) => {
                      e.stopPropagation();
                      flip();
                    }}
                  />
                  <S.ListItemLabel
                    onClick={(e) => {
                      e.stopPropagation();
                      flip();
                    }}
                  >
                    {e}
                  </S.ListItemLabel>
                </S.ListItem>
              </>
            );
          })
          //availableLanguages?.map((e) => (
          //  <S.ListItem key={e}>
          //    {e} {selectedLanguages.includes(e) ? "selected" : "not"}
          //    <button
          //      style={{ padding: "5px" }}
          //      onClick={() =>
          //        setSelectedLanguages((prev) => {
          //          const idx = prev.indexOf(e);
          //          console.log(e, idx);
          //          if (idx == -1) {
          //            return [...prev, e];
          //          }

          //          let newArray = [...prev];
          //          newArray.splice(idx, 1);

          //          /*
          //          if (newArray.length == 0) {
          //            return prev;
          //          }
          //          */
          //          return newArray;
          //        })
          //      }
          //    >
          //      Flip
          //    </button>
          //  </S.ListItem>
          //))
        }
      </S.List>
    </S.Wrapper>
  );
};
