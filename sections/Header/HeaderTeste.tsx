import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  name?: string;
  iconleft?: AvailableIcons;
  iconright?: AvailableIcons;
  paths: Array<{
    name: string;
    href: string;
  }>;
}

export default function TesteHeader({ name, iconleft, iconright, paths }: Props) {
  return (
    <div class="navbar fixed bg-zinc-900 z-50">
      <div class="navbar-start">
        <div class="flex lg:hidden dropdown">
          <label tabIndex={0} class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div>
          <a class="btn btn-ghost normal-case text-xl text-white">{name}</a>
        </div>

        <ul class="hidden lg:flex items-center justify-center space-x-4">
          {paths?.map((item) => (
            <li>
              <a
                class="text-white opacity-100 hover:opacity-80 duration-300 transition-opacity text-sm"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          {iconleft && (
            <Icon id={iconleft} width={20} height={20} strokeWidth={3} class="text-white" />
          )}
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            {iconright && (
              <Icon id={iconright} width={20} height={20} strokeWidth={3} class="text-white" />
            )}
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
