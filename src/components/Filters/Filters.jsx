import PropTypes from "prop-types";
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
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filtersSlice";

const Filters = ({ onFormSubmit }) => {
  const { mileageFrom, mileageTo } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { data: statistic } = useGetAdvertsStatisticsQuery();

  const selectMakeOptions = statistic?.makeList.map((make) => {
    return { value: make, label: make };
  });

  const selectPriceOptions = statistic?.priceList.map((price) => {
    return { value: price, label: price };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  const handleSelectChange = (payload, event) => {
    if (!payload) {
      dispatch(updateFilters({ [event.name]: "" }));
      // onInputClear();
      return;
    }
    dispatch(updateFilters({ [event.name]: payload.value }));
  };

  const handleTextInputChange = ({ target }) => {
    dispatch(updateFilters({ [target.name]: target.value }));
  };

  return (
    <>
      <FiltersForm onSubmit={handleSubmit}>
        <div>
          <InputUpperText>Car brand</InputUpperText>
          <CustomSelect
            selectOptions={selectMakeOptions}
            handleChange={handleSelectChange}
            type="MAKE"
            placeholder="Enter the text"
            isClearable={true}
            isSearchable={true}
            name="make"
          />
        </div>

        <div>
          <InputUpperText>Price/ 1 hour</InputUpperText>
          <CustomSelect
            selectOptions={selectPriceOptions}
            handleChange={handleSelectChange}
            type="PRICE"
            placeholder="To$"
            isClearable={true}
            isSearchable={false}
            name="rentalPrice"
          />
        </div>
        <div>
          <InputUpperText>Car mileage / km</InputUpperText>
          <MileageGroupWrapper>
            <MileageInputWrapper>
              <MileageInputLabel htmlFor="mileage-from">From</MileageInputLabel>
              <MileageInput
                type="text"
                id="mileage-from"
                name="mileageFrom"
                onChange={handleTextInputChange}
                value={mileageFrom}
              />
            </MileageInputWrapper>
            <MileageInputWrapper>
              <MileageInputLabel htmlFor="mileage-to">To</MileageInputLabel>
              <MileageInput
                type="text"
                id="mileage-to"
                name="mileageTo"
                onChange={handleTextInputChange}
                value={mileageTo}
              />
            </MileageInputWrapper>
          </MileageGroupWrapper>
        </div>
        <FiltersSearchButton type="submit">Search</FiltersSearchButton>
      </FiltersForm>
    </>
  );
};

Filters.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  // onInputClear: PropTypes.func.isRequired,
};

export default Filters;
