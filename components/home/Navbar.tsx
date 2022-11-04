import { navigation } from "../../constants/arrays"

export const Navbar = () => {




  return (
    <div>
      <div className='sm:hidden'>
        <select
          className='block w-full rounded-md border-gray-300'
        >
          {navigation.map((nav) => (
            <option key={nav.name}>{nav.name}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex bg-primary-400'>
            {navigation.map((nav) => (
              <a
                key={nav.name}
                href={nav.href}
                className='text-white w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
              >
                {nav.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>

  )
}
