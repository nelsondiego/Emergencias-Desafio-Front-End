
type props = {
  title: string,
  isDisabled?: boolean
  action: () => {} | void,
}


export const Button = ({ title, action, isDisabled = false}:props) => {
  
  return (
    <button 
      disabled={isDisabled}
      onClick={action}
      className=" bg-blue-900 text-blue-100 rounded-lg px-4 py-1 hover:bg-blue-800 disabled:text-blue-500 disabled:bg-blue-700"
    >{title}</button>
  );
}