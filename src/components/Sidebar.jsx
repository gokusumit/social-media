const Sidebar = ({selectedTab}) => {
  return (
    <div>
      <div ClassNameName="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "280px"}}>
    <a href="/" ClassNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg ClassNameName="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span ClassNameName="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul ClassNameName="nav nav-pills flex-column mb-auto">
      <li ClassNameName="nav-item">
        <a href="#" ClassNameName={`nav-link text-white ${selectedTab==='Home'&& 'active'}` }aria-current="page">
          <svg ClassNameName="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" ClassNameName={`nav-link text-white ${selectedTab==='Create Post'&& 'active'}` }>
          <svg ClassNameName="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
        Create Post
        </a>
      </li>
       
    </ul>
    <hr/>
    <div ClassNameName="dropdown">
      <a href="#" ClassNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" ClassNameName="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul ClassNameName="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a ClassNameName="dropdown-item" href="#">New project...</a></li>
        <li><a ClassNameName="dropdown-item" href="#">Settings</a></li>
        <li><a ClassNameName="dropdown-item" href="#">Profile</a></li>
        <li><hr ClassNameName="dropdown-divider"/></li>
        <li><a ClassNameName="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Sidebar
