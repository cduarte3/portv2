export default function Cursor() {
  return (
    <>
      <style>
        {`
          /* Influenced from Caden Chen's guide with Medium */
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/arrow_dark.svg'), auto !important;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/pointer_dark.svg'), auto !important;
          }

          button:focus, a:focus, input:focus, .focus:focus {
            cursor: url('/pointer_dark.svg'), auto !important;
          }

          /* For text elements */
          span, li, blockquote, code, u {
            cursor: url('/pointer_dark.svg'), text !important;
          }

          /* For text elements */
          p, h1, h2, h3, h4, h5, h6, b {
            cursor: url('/arrow_dark.svg'), text !important;
          }

          /* For active/clicking state */
          button:active, a:active, input:active, .active:active {
            cursor: url('/pointer_active_dark.svg'), pointer !important;
          }

          /* For github-contribution-calendar */
          .calendar-cell {
            cursor: url('/pointer_dark.svg'), auto !important;
          }

          /* Override Embla Carousel default cursors */
          .embla, .embla * {
            cursor: url('/pointer_active_dark.svg'), auto !important;
          }

          .embla:active, .embla:active * {
            cursor: url('/pointer_active_dark.svg'), pointer !important;
          }
        `}
      </style>
    </>
  );
}
