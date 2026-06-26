import { GitHub, Telegram } from '../../icons'

import CardLayout from '../../layout/CardLayout'

import type { TeamMember } from '../../../data/team'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard ({ member }: TeamCardProps) {
  return (
    <CardLayout align='center'>
      <a className='logo'>
        <svg
          className='team-logo-icon'
          viewBox='0 0 1024 1024'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='logo-sun'
            d='M743.824 631.843C743.824 570.271 719.364 511.221 675.826 467.683C632.289 424.146 573.239 399.686 511.667 399.686C450.095 399.686 391.045 424.146 347.507 467.683C303.969 511.221 279.51 570.271 279.51 631.843L511.667 631.843H743.824Z'
            fill='currentColor'
          />
          <path
            className='logo-ripple-1'
            d='M511.667 334.431C590.545 334.431 666.193 365.766 721.968 421.542C777.744 477.317 809.078 552.965 809.078 631.843V646.902H214.255V631.843C214.255 552.965 245.59 477.317 301.365 421.542C357.141 365.766 432.788 334.431 511.667 334.431ZM511.667 349.49C436.782 349.49 364.965 379.239 312.013 432.19L310.776 433.434C258.598 486.263 229.314 557.544 229.314 631.843H794.02C794.02 557.544 764.735 486.263 712.558 433.434L711.32 432.19C658.368 379.238 586.551 349.49 511.667 349.49Z'
            fill='currentColor'
            fillOpacity='0.6'
          />
          <path
            className='logo-ripple-2'
            d='M511.667 271.686C607.186 271.686 698.793 309.632 766.336 377.174C833.878 444.717 871.824 536.324 871.824 631.843V646.902H151.51V631.843C151.51 536.324 189.455 444.717 256.998 377.174C324.54 309.632 416.147 271.686 511.667 271.686ZM511.667 286.745C420.141 286.745 332.364 323.104 267.646 387.822L266.134 389.343C202.361 453.912 166.569 541.033 166.569 631.843H856.765C856.765 541.033 820.972 453.912 757.2 389.343L755.688 387.822C690.969 323.104 603.192 286.745 511.667 286.745Z'
            fill='currentColor'
            fillOpacity='0.2'
          />
          <path
            className='logo-ripple-3'
            d='M511.667 224C621.83 224 727.482 267.762 805.38 345.659C883.277 423.557 927.039 529.209 927.039 639.373V646.902H96.2941V639.373C96.2941 529.209 140.056 423.557 217.953 345.659C295.851 267.762 401.503 224 511.667 224ZM511.667 239.059C405.497 239.059 303.675 281.234 228.602 356.308C155.305 429.604 113.368 528.399 111.424 631.843H911.909C909.966 528.399 868.029 429.604 794.732 356.308C719.658 281.234 617.836 239.059 511.667 239.059Z'
            fill='currentColor'
            fillOpacity='0.05'
          />
          <rect
            className='logo-horizon'
            x='85'
            y='631.843'
            width='853.333'
            height='15.0588'
            rx='7.52941'
            fill='currentColor'
          />
        </svg>
      </a>

      <h3 className='text-primary text-2xl font-semibold'>{member.name}</h3>

      <p className='text-secondary'>{member.role}</p>

      <p className='team-description'>{member.description}</p>

      <div className='team-socials'>
        {member.github && (
          <a
            href={`https://github.com/${member.github}`}
            target='_blank'
            rel='noreferrer'
          >
            <GitHub width={20} height={20} />
          </a>
        )}

        {member.telegram && (
          <a
            href={`https://t.me/${member.telegram}`}
            target='_blank'
            rel='noreferrer'
          >
            <Telegram width={20} height={20} />
          </a>
        )}
      </div>
    </CardLayout>
  )
}
