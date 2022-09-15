import * as React from 'react';
import './style.css';

const imgData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9ubGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export default function App() {
  const [data, setData] = React.useState(imgData);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const n = setTimeout(() => {
      goNext();
    }, 2000);
    return () => {
      clearInterval(n);
    };
  }, [selected, setSelected]);

  const goPrev = () => {
    if (selected === 0) {
      setSelected(data.length - 1);
    } else {
      setSelected(selected - 1);
    }
  };
  const goNext = () => {
    if (selected === data.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };
  const goCurrent = (i) => {
    setSelected(i);
  };
  return (
    <div
      style={{
        width: '100%',
        margin: '10rem auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={data[selected].image}
          style={{ height: '300px', width: '600px' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '2%',
            padding: '5px',
            backgroundColor: 'red',
            cursor: 'pointer',
          }}
          onClick={goPrev}
        >
          prev
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '2%',
            padding: '5px',
            backgroundColor: 'red',
            cursor: 'pointer',
          }}
          onClick={goNext}
        >
          next
        </div>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'row' }}>
        {imgData &&
          imgData.map((item, index) => (
            <div
              style={{
                marginRight: '0.75rem',
                height: '16px',
                width: '16px',
                borderRadius: '50%',
                backgroundColor: index === selected ? 'green' : 'red',
                cursor: 'pointer',
              }}
              onClick={() => goCurrent(index)}
            ></div>
          ))}
      </div>
    </div>
  );
}
