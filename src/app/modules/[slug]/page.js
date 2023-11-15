import { paths } from "src/routes/paths";
import { ModuleView } from "src/sections/blog/view";
import { getAllRecipes, getSingleModule } from "src/data/recipeUtils";
import { redirect } from 'next/navigation';
// eslint-disable-next-line consistent-return
export async function generateMetadata({ params }) {

  const module = await getSingleModule(params.slug);

  const keywords = [
    "Cadence Cookbook",
    "Flow blockchain",
    "Flow",
    "Blockchain development",
    "Cadence",
    "Cadence programming",
    "Blockchain development",
    "Cadence examples",
    "Cadence use cases",
    "Flow blockchain examples",
    "Flow blockchain use cases",
    module.module
  ];

  

  if (module) {

    return {
      title: `${module.module} | Cadence Cookbook `,
      description:
        `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain in the ${module.title} module.`,
      keywords: keywords,
      alternates: {
        canonical: `https://cookbook.flow.com/modules/${params.slug}/`,
      },
      openGraph: {
        title: `${module.title} | Cadence Cookbook `,
        description:
        `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain in the ${module.title} module.`,
        url: `https://cookbook.flow.com/modules/${params.slug}/`,
        keywords: keywords,
        images: [
          {
            url: `https://cookbook.flow.com/assets/logo/flow_logo.svg`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  }
}


export async function generateStaticParams() {
  const modules = await getAllRecipes();
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export default async function ModulePage({params}) {
  const module = await getSingleModule(params.slug);

  if (!module) {
    redirect(paths.page404);
  }

  return <ModuleView module={module}  />;
}
