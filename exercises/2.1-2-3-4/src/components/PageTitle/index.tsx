interface PageTitleProps {
    title: string;
  }

const PageTitle = (props: PageTitleProps) => {
    return <h1 className="animate__animated animate__bounce">{props.title}</h1>;
};

export default PageTitle;