import './ManipulatorStyle.css'

const Manipulator = () => {

  let textarea =  document.getElementById('content');   // Target the textarea by ID

  // Copy Text function
  const CopyText = (e) => {
    textarea.select();                                  
    document.execCommand("copy");                       
    e.preventDefault();                                 
  };
  
  // Upper Case Converting Function
  const ToUpperCase = (e) => {
    let text = textarea.value;
    let upperCase = text.toUpperCase();

    textarea.value = upperCase;
    e.preventDefault();                             
  };

  // Lower Case Converting Function
  const ToLowercase = (e) => {
    let text = textarea.value;
    let LowerCase = text.toLowerCase();

    textarea.value = LowerCase;
    e.preventDefault();                            
  };

  
  // Alternate Case Converting Function
  const AlternateCase = (e) => {
    let text = textarea.value;
    let newCase = '';

    for(let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if(i%2===0){
        newCase += char.toLowerCase();
      }
      else{
        newCase += char.toUpperCase();
      }
    }

    textarea.value = newCase;
    e.preventDefault();                             
  };
  
  // Remove Extra Spaces from  text
  const RemoveSpace = (e) => {
    let text = textarea.value;
    let remove = text.replace(/\s+/g, ' ');

    textarea.value = remove;
    e.preventDefault();                             
  };

  // Clear Textarea
  const ClearText = (e) => {
    let text = textarea.value;
    text = '';
    textarea.value = text;
    e.preventDefault();                            
  };
  
  return (
   <main>
    <form>
        <fieldset>
        <label htmlFor="content">Enter the Text Below:</label>
        <textarea id="content" placeholder='Enter Your Text Here.........' rows='30' cols='150'></textarea>
        </fieldset>
        <div className='btn'>
        <button onClick={CopyText}>Copy Text</button>
        <button onClick={ToUpperCase}>Change to UpperCase</button>
        <button onClick={ToLowercase}>Change to LowerCase</button>
        <button onClick={AlternateCase}>Change to AlternateCase</button>
        <button onClick={RemoveSpace}>Remove Extra Spaces</button>
        <button onClick={ClearText}>Clear Text</button>
        </div>
    </form>
   </main>
  )
}

export default Manipulator