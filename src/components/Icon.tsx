type IconName = 'call' | 'chevron_left' | 'chevron_right' | 'close' | 'download' | 'location_on' | 'mail' | 'menu' | 'play_arrow'

type IconProps = {
  name: IconName
  className?: string
}

export function Icon({ name, className = '' }: IconProps) {
  return <span aria-hidden="true" className={`material-symbols inline-block text-center ${className}`}>{name}</span>
}
