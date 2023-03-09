import React from 'react';

const Spinner = () => (
  <>
    <div className='spinner'>
      <div className='blob top' />
      <div className='blob bottom' />
      <div className='blob left' />

      <div className='blob move-blob' />
    </div>

    <style jsx>{ `
.spinner {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.spinner .blob {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 2px solid #001529;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.spinner .blob.top {
  top: 0;
  -webkit-animation: blob-top 1s infinite ease-in;
          animation: blob-top 1s infinite ease-in;
}
.spinner .blob.bottom {
  top: 100%;
  -webkit-animation: blob-bottom 1s infinite ease-in;
          animation: blob-bottom 1s infinite ease-in;
}
.spinner .blob.left {
  left: 0;
  -webkit-animation: blob-left 1s infinite ease-in;
          animation: blob-left 1s infinite ease-in;
}
.spinner .move-blob {
  background: #001529;
  top: 0;
  -webkit-animation: blob-spinner-mover 1s infinite ease-in;
          animation: blob-spinner-mover 1s infinite ease-in;
}

@-webkit-keyframes blob-bottom {
  25%, 50%, 75% {
    top: 50%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 50%;
  }
}

@keyframes blob-bottom {
  25%, 50%, 75% {
    top: 50%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 50%;
  }
}
@-webkit-keyframes blob-left {
  25% {
    top: 50%;
    left: 0;
  }
  50%, 100% {
    top: 100%;
    left: 50%;
  }
}
@keyframes blob-left {
  25% {
    top: 50%;
    left: 0;
  }
  50%, 100% {
    top: 100%;
    left: 50%;
  }
}
@-webkit-keyframes blob-top {
  50% {
    top: 0;
    left: 50%;
  }
  75%, 100% {
    top: 50%;
    left: 0;
  }
}
@keyframes blob-top {
  50% {
    top: 0;
    left: 50%;
  }
  75%, 100% {
    top: 50%;
    left: 0;
  }
}
@-webkit-keyframes blob-spinner-mover {
  0%, 100% {
    top: 0;
    left: 50%;
  }
  25% {
    top: 50%;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
}
@keyframes blob-spinner-mover {
  0%, 100% {
    top: 0;
    left: 50%;
  }
  25% {
    top: 50%;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
}
          ` }</style>
  </>
);

export default Spinner;
