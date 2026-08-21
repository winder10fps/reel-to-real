import './RunningLine.css'

const RunningLine = () => {
  const text = 'Винил • Кассеты • Аппаратура • Реставрация • Доставка по миру •'
  const items = Array(5).fill(text)

  return (
    <div className="running-line__container">
      <div className="running-line__track">
        {items.map((item, index) =>
          <span
            key={index}
            className='running-line__text'
          >
            {item}&nbsp;
          </span>
        )}
      </div>
    </div>
  );
}

export default RunningLine