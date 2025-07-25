export default function Cursor() {
  return (
    <>
      <style>
        {`
          /* Influenced from Caden Chen's guide with Medium */
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/arrow_dark.svg'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/pointer_dark.svg'), auto;
          }

          button:focus, a:focus, input:focus, .focus:focus {
            cursor: url('/pointer_dark.svg'), auto;
          }

          /* For text elements */
          span, li, blockquote, code, u {
            cursor: url('/pointer_dark.svg'), text;
          }

          /* For text elements */
          p, h1, h2, h3, h4, h5, h6, b {
            cursor: url('/arrow_dark.svg'), text;
          }

          /* For active/clicking state */
          button:active, a:active, input:active, .active:active {
            cursor: url('/pointer_active_dark.svg'), pointer;
          }

          /* For github-contribution-calendar */
          .calendar-cell {
            cursor: url('/pointer_dark.svg'), auto !important;
          }
        `}
      </style>
    </>
  );
}
