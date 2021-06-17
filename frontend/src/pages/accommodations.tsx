import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Location } from '../data/types';
import SEO from "../components/seo";
import { SquigglyLinePeakUp } from "../components/icons/ornaments";
import { AccommodationSection } from "../components/accommodation-card/AccommodationSection";
import { Paragraph } from "../components/typography";
import { Button } from "../components/buttons";

interface AccomodationsPageProps {
  accommodations: {
    nodes: Location[]
  }
}

const filterButtonsMap = [
  {name: "All", value: ""},
  {name: "Lodging", value: "lodging"},
  {name: "Restaurants", value: "restaurants"},
  {name: "Points of Interest", value: "poi"},
];

type FilterKeyword = '' | 'lodging' | 'restaurants' | 'poi';

const Accommodations = (props: PageProps<AccomodationsPageProps>) => {
  const {
    data: {
      accommodations: { nodes: accommodations }
    }
  } = props;

  const lodgingEntries = accommodations.filter(a => Object.is(a.category, 'lodging'));
  const restaurantEntries = accommodations.filter(a => Object.is(a.category, 'restaurant'));
  const poiEntries = accommodations.filter(a => Object.is(a.category, 'poi'));

  const [ activeFilter, setActiveFilter ] = React.useState<FilterKeyword>('');

  return (
    <section className="p-4">
      <SEO title="Accommodations" />
      <SquigglyLinePeakUp className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="max-w-4xl mx-auto">
        <Paragraph>
          We know some of you may come from afar and may not be familiar with all Augusta, Ga has to offer.
          We've arranged for block rates at some great hotels, but you're more than welcome to explore other offers in the area.
          We also picked out some places that might pique your interest during your stay - from restuarants to escape rooms, Augusta
          has quite a few gems to offer.
        </Paragraph>
        <div className="flex">
          <div className="mx-auto">
            {filterButtonsMap.map(
              btn => 
              <FilterButton 
                key={btn.value}
                text={btn.name}
                active={activeFilter === btn.value} 
                onClick={() => setActiveFilter(btn.value as FilterKeyword)}
              />
            )}
          </div>
        </div>
      </div>
      { (activeFilter === "lodging" || !activeFilter) && <AccommodationSection list={lodgingEntries} category="Lodging" /> }
      { (activeFilter === "restaurants" || !activeFilter) && <AccommodationSection list={restaurantEntries} category="Restaurants" /> }
      { (activeFilter === "poi" || !activeFilter) && <AccommodationSection list={poiEntries} category="Points of Interest" /> }
    </section>
  );
};

export default Accommodations;

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  text: string;
}

const FilterButton = ({
  active = false,
  onClick = () => {},
  text
}: FilterButtonProps) => 
  <Button 
    variant={active ? "fill" : "outline"} 
    onClick={() => onClick()}
    twClasses="mx-2"
  >
    {text}
  </Button>;

export const query = graphql`
query LocationAccomodationsQuery {
  accommodations: allSanityLocation(
    filter: { 
      category: {
        nin: ["venue"] # grab everything but the venue 
      }
    }
  ) {
    nodes {
      name
      address1
      address2
      city
      state
      zipcode
      url
      slug {
        current
      }
      description: _rawRtDescription
      location {
        lat
        lng
      }
      category
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}`;

