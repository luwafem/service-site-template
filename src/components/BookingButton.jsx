export default function BookingButton({ url, accentColor, buttonStyle }) {
  return (
    <button
      onClick={() => window.open(url, '_blank')}
      className={`mt-4 w-full py-3 text-white text-base font-medium min-h-[44px] rounded-${buttonStyle}`}
      style={{ backgroundColor: accentColor }}
    >
      Book Now
    </button>
  );
}