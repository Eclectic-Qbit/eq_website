import { useEffect, useState } from "react";

export function DiscordLogo({ className, width, height, fill }) {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      viewBox="2 2 20 20"
    >
      <path
        fill={fill}
        d="M18.59 5.89c-1.23-.57-2.54-.99-3.92-1.23-.17.3-.37.71-.5 1.04-1.46-.22-2.91-.22-4.34 0-.14-.33-.34-.74-.51-1.04-1.38.24-2.69.66-3.92 1.23-2.48 3.74-3.15 7.39-2.82 10.98 1.65 1.23 3.24 1.97 4.81 2.46.39-.53.73-1.1 1.03-1.69-.57-.21-1.11-.48-1.62-.79.14-.1.27-.21.4-.31 3.13 1.46 6.52 1.46 9.61 0 .13.11.26.21.4.31-.51.31-1.06.57-1.62.79.3.59.64 1.16 1.03 1.69 1.57-.49 3.17-1.23 4.81-2.46.39-4.17-.67-7.78-2.82-10.98h-.02zm-9.75 8.78c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94zm6.31 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94z"
      ></path>
    </svg>
  );
}
export function RedditLogo({ className, width, height, fill }) {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      fill={fill ? fill : "black"}
      viewBox="0 0 19 19"
    >
      <g fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-100 -7561)">
          <g transform="translate(56 160)">
            <path d="M57.029 7412.247a1.407 1.407 0 01-1.401-1.397c0-.773.639-1.419 1.401-1.419.761 0 1.378.646 1.378 1.419 0 .772-.616 1.397-1.378 1.397m.194 2.583c-.673.681-1.728 1.013-3.224 1.013-1.497 0-2.551-.332-3.223-1.013a.383.383 0 010-.537.37.37 0 01.528 0c.525.533 1.406.792 2.695.792 1.288 0 2.17-.26 2.696-.792a.37.37 0 01.528 0 .383.383 0 010 .537m-7.631-3.98c0-.772.638-1.419 1.399-1.419s1.378.647 1.378 1.419-.617 1.397-1.378 1.397a1.406 1.406 0 01-1.399-1.397M64 7409.313c0-1.266-1.016-2.297-2.265-2.297-.576 0-1.119.218-1.535.609-1.495-.987-3.497-1.625-5.714-1.712l1.223-3.786 3.212.767c.001 1.042.837 1.889 1.865 1.889s1.865-.849 1.865-1.892c0-1.042-.837-1.891-1.865-1.891-.77 0-1.431.475-1.716 1.151l-3.858-.922-1.51 4.676c-2.301.043-4.386.678-5.937 1.688a2.239 2.239 0 00-1.501-.577c-1.248 0-2.264 1.03-2.264 2.297 0 .805.414 1.542 1.076 1.956-.603 3.612 3.594 6.731 8.882 6.731 5.266 0 9.449-3.091 8.891-6.686a2.287 2.287 0 001.151-2"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
export function TelegramLogo({ className, width, height, fill, hoverColor }) {
  const [hover, setHover] = useState(false);
  return (
    <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      xmlns="http://www.w3.org/2000/svg"
      fill={hoverColor && hover ? hoverColor : fill ? fill : "black"}
      width={width ? width : 800}
      height={height ? height : 800}
      viewBox="0 0 32 24"
    >
      <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />
    </svg>
  );
}
export function TikTokLogo({ className, width, height, fill }) {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      fill={fill ? fill : "black"}
      version="1.1"
      viewBox="0 0 32 32"
    >
      <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z" />
    </svg>
  );
}
export function FacebookLogo({ className, width, height, fill }) {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      fill={fill ? fill : "black"}
      version="1.1"
      viewBox="-5 0 20 20"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#000" transform="translate(-385 -7399)">
          <g transform="translate(56 160)">
            <path d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9h3.898z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function MediumLogo({ width, height, fill }) {
  return (
    <svg
      fill={fill ? fill : "black"}
      width={width ? width : 800}
      height={height ? height : 800}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128ZM240,64a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Zm-56,0c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Z" />
    </svg>
  );
}
export function LinkedinLogo({ width, height, fill, hoverColor }) {
  const [hover, setHover] = useState(false);
  return (
    <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      viewBox="0 -2 44 44"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-702.000000, -265.000000)"
          fill={hoverColor && hover ? hoverColor : fill ? fill : "#007EBB"}
        >
          <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" />
        </g>
      </g>
    </svg>
  );
}

export function MetamaskLogo({width, height, fill, hoverColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      viewBox="2 2 20 20"
    >
      <path
        fill={fill}
        d="M18.59 5.89c-1.23-.57-2.54-.99-3.92-1.23-.17.3-.37.71-.5 1.04-1.46-.22-2.91-.22-4.34 0-.14-.33-.34-.74-.51-1.04-1.38.24-2.69.66-3.92 1.23-2.48 3.74-3.15 7.39-2.82 10.98 1.65 1.23 3.24 1.97 4.81 2.46.39-.53.73-1.1 1.03-1.69-.57-.21-1.11-.48-1.62-.79.14-.1.27-.21.4-.31 3.13 1.46 6.52 1.46 9.61 0 .13.11.26.21.4.31-.51.31-1.06.57-1.62.79.3.59.64 1.16 1.03 1.69 1.57-.49 3.17-1.23 4.81-2.46.39-4.17-.67-7.78-2.82-10.98h-.02zm-9.75 8.78c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94zm6.31 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94s1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94z"
      ></path>
    </svg>
  )
}
