import '../style/objects/row.scss'

const AppRow = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <div className="o-row">{children}</div>
}

export default AppRow
