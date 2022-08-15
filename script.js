const handlesubmit = () => {
  Event.preventDefault();

  alert('enviando form')
}


document.querySelector('form').addEventListener('submit', handlesubmit );