export default function FilesTroll() {
  return <></>
}
export function getServerSideProps() {
  return {
    redirect: {
      permanent: true,
      destination: `/trol`
    }
  }
}
