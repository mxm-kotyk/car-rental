import { useGetAdvertsStatisticsQuery } from "../../redux/advertsApi";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  FiltersForm,
  FiltersSearchButton,
  InputUpperText,
  MileageGroupWrapper,
  MileageInput,
  MileageInputLabel,
  MileageInputWrapper,
} from "./Filters.styled";

const Filters = () => {
  const { data: statistic } = useGetAdvertsStatisticsQuery();

  const selectMakeOptions = statistic?.makeList.map((make) => {
    return { value: make, label: make };
  });

  const selectPriceOptions = statistic?.priceList.map((price) => {
    return { value: price, label: price };
  });

  const handleChange = (args) => {
    console.log(args);
  };

  return (
    <>
      <FiltersForm>
        <div>
          <InputUpperText>Car brand</InputUpperText>
          <CustomSelect
            selectOptions={selectMakeOptions}
            handleChange={handleChange}
            type="MAKE"
            placeholder="Enter the text"
            isClearable={true}
            isSearchable={true}
          />
        </div>

        <div>
          <InputUpperText>Price/ 1 hour</InputUpperText>
          <CustomSelect
            selectOptions={selectPriceOptions}
            handleChange={handleChange}
            type="PRICE"
            placeholder="To$"
            isClearable={true}
            isSearchable={false}
          />
        </div>
        <div>
          <InputUpperText>Car mileage / km</InputUpperText>
          <MileageGroupWrapper>
            <MileageInputWrapper>
              <MileageInputLabel htmlFor="mileage-from">From</MileageInputLabel>
              <MileageInput type="text" id="mileage-from" />
            </MileageInputWrapper>
            <MileageInputWrapper>
              <MileageInputLabel htmlFor="mileage-to">To</MileageInputLabel>
              <MileageInput type="text" id="mileage-to" />
            </MileageInputWrapper>
          </MileageGroupWrapper>
        </div>
        <FiltersSearchButton type="submit">Search</FiltersSearchButton>
      </FiltersForm>
    </>
  );
};

export default Filters;
