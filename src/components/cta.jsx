export default function CTA({
  href = "javascript:;",
  text = "Get a Free Quote",
  theme = "primary",
  size = "medium",
  css = " "
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a ${
          href === "javascript:;" ? `onclick="parent.LC_API.open_chat_window();return false;"` : ""
        } href=${
          href === "tel:833-666-6684 " ? "tel:833-666-6684 " : "javascript:;"
        } class='
          ${theme === "primary" ? "bg-primary" : ""}
          ${theme === "secondary" ? "bg-secondary" : ""}
          ${theme === "transparent" ? "border" : ""}
          ${theme === "lpPrimary" ? "bg-[linear-gradient(180deg,_#351a4b,_#723389)]" : ""}
          ${theme === "lpSecondary" ? "bg-[linear-gradient(180deg,_#f78f1f,_#f15623)]" : ""}
          ${size === "medium" ? "px-5 h-[40px] text-[14px]" : ""}
          ${size === "large" ? "px-7 h-[45px] text-[16px]" : ""}
          inline-flex justify-center items-center
          font-medium text-white rounded-md transition-all duration-300
          ${css}'
        >${text}</a>`
      }}
    />
  );
}
