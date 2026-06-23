// Small, simplified flag glyphs for location pills — stylized for clarity at
// tiny sizes, not literal/detailed renders. viewBox is shared (30x20) so they
// all sit at the same scale inside a pill.

export function CanadaFlag(props) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="30" height="20" fill="#fff" />
      <rect width="7.5" height="20" fill="#d52b1e" />
      <rect x="22.5" width="7.5" height="20" fill="#d52b1e" />
      <path
        d="M15,4.2 15.8,6.6 18.2,6 16.6,8.2 18.6,9.6 16.2,9.9 16.6,12.2 15,11 13.4,12.2 13.8,9.9 11.4,9.6 13.4,8.2 11.8,6 14.2,6.6 Z"
        fill="#d52b1e"
      />
    </svg>
  );
}

export function USAFlag(props) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="30" height="20" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) =>
        i % 2 === 0 ? (
          <rect key={i} y={(i * 20) / 7} width="30" height={20 / 7} fill="#b22234" />
        ) : null
      )}
      <rect width="13" height="11" fill="#3c3b6e" />
    </svg>
  );
}

export function SouthAfricaFlag(props) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="30" height="20" fill="#fff" />
      <rect y="0" width="30" height="6.2" fill="#de3831" />
      <rect y="13.8" width="30" height="6.2" fill="#002395" />
      <rect y="6.2" width="30" height="7.6" fill="#fff" />
      <rect y="8.5" width="30" height="3" fill="#007a4d" />
      <path d="M0,0 L12,10 L0,20 Z" fill="#ffb612" />
      <path d="M0,1.6 L10.5,10 L0,18.4 Z" fill="#000" />
    </svg>
  );
}

export function UAEFlag(props) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="9" height="20" fill="#ce1126" />
      <rect x="9" width="21" height="6.67" fill="#00732f" />
      <rect x="9" y="6.67" width="21" height="6.66" fill="#fff" />
      <rect x="9" y="13.33" width="21" height="6.67" fill="#000" />
    </svg>
  );
}
