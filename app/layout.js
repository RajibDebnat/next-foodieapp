import MainHeaderBackground from '@/components/mainheader/MainHeaderBackground';
import './globals.css';
import Header from '@/components/mainheader/Header';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
// console.log()
export default function RootLayout({ children }) {
  console.log('hello world')
  return (
    <html lang="en">
      <body>
       <MainHeaderBackground/>
      <Header/>
        {children}
      </body>
    </html>
  );
}
