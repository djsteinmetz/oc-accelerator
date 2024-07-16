import { IconProps, Image, ImageProps, Link, chakra, createIcon } from '@chakra-ui/react'
import { THEME_LOGO_URL } from '../../../constants/constants'

type HeaderLogoProps = IconProps & ImageProps

export function HeaderLogo({ ...headerLogoProps }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      display="flex"
      alignItems="center"
      height="100%"
    >
      {THEME_LOGO_URL ? (
        <Image
          src={THEME_LOGO_URL as string}
          alt="Logo"
          {...headerLogoProps}
          height="80%"
          width="auto"
          padding={2}
        />
      ) : (
        <MyCommerceIcon {...headerLogoProps} />
      )}
    </Link>
  )
}

const MyCommerceIcon = createIcon({
  displayName: 'MyCommerceIcon',
  viewBox: '0 0 688.11 114.33',
  defaultProps: {
    height: '80%',
    width: 'auto',
    padding: 1.5,
  },
  path: [
    <>
      <chakra.path
        fill="none"
        d="M34.02 14.73h-.05l16.06 21.4c.05.09.09.14.14.23 0-.09-.09-.23-.18-.32L34.02 14.73ZM10.63 6.95 49.11 0 10.59 6.95l21.35 5.29-21.31-5.29zM27.94 43.04 85.11 88.7l-.05-.05-6.3-5.06-50.82-40.55zM25.09 40.83l-25-10.17H0l25.09 10.17zM77.88 7.55l15.05 33.37-20.07 4.37c-.78.18-1.29.78-1.24 1.43 0-.64.51-1.2 1.24-1.38l20.07-4.33-15.1-33.46h.05Z"
      />
      <chakra.path
        fill="primary.500"
        d="M23.34 43.08 2.72 34.71l49.16 43.64 28.31 10.17-56.67-45.25-.18-.18ZM43.68 36.5l-27.39-9.07-.04.05L.09 30.66l25 10.17 18.59-4.33zM44.37 33.79 29.92 14.55 7.41 8.98l10.22 15.97 26.74 8.84zM31.94 12.24l40.05-6.53L49.11 0 10.63 6.95l21.31 5.29z"
      />
      <chakra.path
        fill="primary.200"
        d="m72.87 45.29 20.07-4.37L77.89 7.55l-43.87 7.18 15.97 21.31c.09.09.14.18.18.32.14.32.18.64 0 .97-.18.37-.6.69-1.1.78l-21.13 4.93 50.82 40.55 6.35 5.06-13.44-41.66c0-.09 0-.18-.05-.28 0-.6.46-1.2 1.24-1.43Z"
      />
      <chakra.path
        fill="chakra-body-text"
        d="M168.47 16.49h-14.73l-29.08 52.88h15.79l4.48-8.46h19.43l1.69 8.46h14.13l-11.41-52.88h-.3Zm-17.01 32.1 7.58-14.31 2.86 14.31h-10.44ZM205.71 34.24c1.46-1.76 3.2-3.17 5.21-4.23 2.01-1.06 4.23-1.59 6.65-1.59 1.71 0 3.2.3 4.46.91 1.26.6 2.32 1.49 3.17 2.64.86 1.16 1.51 2.57 1.96 4.23l13.6-3.47c-.71-3.32-2.07-6.28-4.08-8.88-2.01-2.59-4.6-4.62-7.74-6.08-3.15-1.46-6.84-2.19-11.07-2.19-4.53 0-8.7.86-12.5 2.57-3.8 1.71-7.1 4.07-9.9 7.06-2.79 3-4.96 6.42-6.5 10.27-1.54 3.85-2.3 7.89-2.3 12.12 0 4.48.98 8.44 2.95 11.86 1.96 3.43 4.75 6.08 8.35 7.97 3.6 1.89 7.79 2.83 12.58 2.83 3.93 0 7.6-.68 11.03-2.04 3.42-1.36 6.5-3.27 9.22-5.74 2.72-2.47 4.99-5.37 6.8-8.69l-12.84-4.99a25.184 25.184 0 0 1-3.55 4.42c-1.31 1.28-2.79 2.3-4.46 3.06s-3.55 1.13-5.67 1.13-3.84-.44-5.33-1.32c-1.49-.88-2.63-2.12-3.44-3.7-.81-1.59-1.21-3.44-1.21-5.55 0-2.27.4-4.49 1.21-6.69.8-2.19 1.94-4.17 3.4-5.93ZM276.57 53.24c-1.31 1.28-2.79 2.3-4.46 3.06s-3.55 1.13-5.67 1.13-3.84-.44-5.33-1.32c-1.49-.88-2.63-2.12-3.44-3.7-.81-1.59-1.21-3.44-1.21-5.55 0-2.27.4-4.49 1.21-6.69.8-2.19 1.94-4.17 3.4-5.93 1.46-1.76 3.2-3.17 5.21-4.23 2.01-1.06 4.23-1.59 6.65-1.59 1.71 0 3.2.3 4.46.91 1.26.6 2.32 1.49 3.17 2.64.86 1.16 1.51 2.57 1.96 4.23l13.6-3.47c-.71-3.32-2.07-6.28-4.08-8.88-2.01-2.59-4.6-4.62-7.74-6.08-3.15-1.46-6.84-2.19-11.07-2.19-4.53 0-8.7.86-12.5 2.57-3.8 1.71-7.1 4.07-9.9 7.06-2.79 3-4.96 6.42-6.5 10.27-1.54 3.85-2.3 7.89-2.3 12.12 0 4.48.98 8.44 2.95 11.86 1.96 3.43 4.75 6.08 8.35 7.97 3.6 1.89 7.79 2.83 12.58 2.83 3.93 0 7.6-.68 11.03-2.04 3.42-1.36 6.5-3.27 9.22-5.74 2.72-2.47 4.99-5.37 6.8-8.69l-12.84-4.99a25.184 25.184 0 0 1-3.55 4.42ZM338.14 29.33l2.11-12.84h-35.42l-8.84 52.88h35.96l2.19-12.84h-22.06l1.28-7.41h17.38l2.11-12.46H315.4l1.29-7.33h21.45zM363.07 16.49h-13.98l-8.84 52.88h35.74l2.19-12.84h-21.84l6.73-40.04zM424.18 29.33l2.12-12.84h-35.43l-8.84 52.88h35.96l2.19-12.84h-22.06l1.28-7.41h17.38l2.11-12.46h-17.45l1.29-7.33h21.45zM462.29 50.41c3.25-1.46 5.93-3.5 8.04-6.12 2.12-2.62 3.45-5.61 4-8.99.6-3.68.24-6.92-1.1-9.75-1.33-2.82-3.44-5.04-6.31-6.65-2.87-1.61-6.32-2.42-10.35-2.42h-21.45l-8.84 52.88h13.98l2.79-16.77h5.02l6.77 16.77h15.71l-8.38-18.91s.08-.03.11-.05ZM447 29.25h7.63c1.71 0 3.02.39 3.93 1.17.91.78 1.36 1.83 1.36 3.14s-.34 2.51-1.02 3.44c-.68.93-1.61 1.62-2.8 2.08-1.18.45-2.56.68-4.12.68h-6.72l1.74-10.5ZM516.19 16.49h-14.73l-29.08 52.88h15.79l4.48-8.46h19.43l1.69 8.46h14.13l-11.41-52.88h-.3Zm-17.01 32.1 7.58-14.31 2.86 14.31h-10.44ZM538.55 16.49l-2.11 12.84h14.96l-6.73 40.04h13.98l6.72-40.04h14.88l2.12-12.84h-43.82zM631.74 23.85c-2.44-2.64-5.43-4.68-8.95-6.12-3.53-1.44-7.43-2.15-11.71-2.15-4.99 0-9.56 1.05-13.71 3.14-4.16 2.09-7.62 5.01-10.39 8.76-2.77 3.75-4.58 8.15-5.44 13.18-.76 4.38-.62 8.37.42 11.97 1.03 3.6 2.77 6.72 5.21 9.37 2.44 2.64 5.44 4.68 8.99 6.12s7.47 2.15 11.75 2.15c4.99 0 9.56-1.04 13.71-3.13 4.16-2.09 7.62-5.01 10.39-8.76 2.77-3.75 4.56-8.1 5.36-13.03.75-4.38.62-8.4-.42-12.05-1.03-3.65-2.77-6.8-5.21-9.44Zm-8.58 20.29c-.45 2.67-1.37 5-2.76 6.99-1.39 1.99-3.1 3.54-5.14 4.65-2.04 1.11-4.29 1.66-6.76 1.66-2.87 0-5.35-.67-7.44-2-2.09-1.33-3.63-3.17-4.61-5.51-.98-2.34-1.22-5.02-.72-8.05.45-2.67 1.37-5.01 2.76-7.03 1.38-2.01 3.11-3.58 5.17-4.68 2.06-1.11 4.33-1.66 6.8-1.66 2.87 0 5.35.67 7.44 2 2.09 1.33 3.61 3.19 4.57 5.55.96 2.37 1.18 5.06.68 8.08ZM683.82 44.29c2.12-2.62 3.45-5.61 4-8.99.6-3.68.24-6.92-1.1-9.75-1.33-2.82-3.44-5.04-6.31-6.65-2.87-1.61-6.32-2.42-10.35-2.42h-21.45l-8.84 52.88h13.98l2.79-16.77h5.02l6.77 16.77h15.71l-8.38-18.91s.08-.03.11-.05c3.25-1.46 5.93-3.5 8.04-6.12Zm-23.34-15.04h7.63c1.71 0 3.02.39 3.93 1.17.91.78 1.36 1.83 1.36 3.14s-.34 2.51-1.02 3.44c-.68.93-1.61 1.62-2.8 2.08-1.18.45-2.56.68-4.12.68h-6.72l1.74-10.5Z"
      />
      <chakra.path
        fill="accent.300"
        d="M549.16 105.78h-10.33l-2.37 8.55H531l10.04-32.54h6.27l10.04 32.54h-5.84l-2.35-8.55Zm-1.2-4.33-3.83-13.96h-.23l-3.88 13.96h7.94ZM575.14 81.78c9.16 0 13.87 5.48 13.87 16.1s-4.67 16.44-13.87 16.44h-9.92V81.78h9.92Zm-4.47 27.79h3.79c6.13 0 8.98-3.63 8.98-11.59s-2.89-11.43-8.98-11.43h-3.79v23.03ZM601.11 114.33h-4.65V81.79h5.73l6.32 19.26h.34l6.27-19.26h5.75v32.54h-4.65v-11.46l.56-13.08h-.38l-5.8 16.89h-3.88l-5.8-16.89h-.38l.56 13.08v11.46ZM631.51 114.33v-4.69h6.68V86.48h-6.68v-4.69h18.81v4.69h-6.67v23.16h6.67v4.69h-18.81ZM661.97 114.33V81.79h4.96l12.27 23.18h.36V81.79h4.78v32.54h-4.94l-12.29-23.27h-.36v23.27h-4.78Z"
      />
    </>,
  ],
})
