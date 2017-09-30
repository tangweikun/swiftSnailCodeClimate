import React, { PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Radio, DatePicker, Button } from 'antd'
import { SOAP_CATEGORY } from '../constants'
import ItemEditor from '../components/ItemEditor'

const EditModal = ({
  onCategoryChange,
  onContentChange,
  onSeveritySelect,
  onCorpusSelect,
  onFollowUpDateSelect,
  onSubmitNewCorpus,
  onRemoveCorpus,
  onClickSave,
  closeModal,
  data,
  corpus,
}) => (
  <Wrapper>
    <TopRow>
      <Radio.Group
        size="large"
        value={data.category}
        onChange={e => onCategoryChange(e.target.value)}
      >
        {SOAP_CATEGORY.map(category => (
          <Radio.Button key={category.value} value={category.value}>
            {category.text}
          </Radio.Button>
        ))}
      </Radio.Group>
      <DatePicker
        size="default"
        onChange={mom => onFollowUpDateSelect(mom.toDate())}
        value={moment(data.phoneFollowUpAt)}
      />
      <ButtonGroup>
        <Button onClick={closeModal}>取消</Button>
        <Button type="primary" onClick={onClickSave}>
          保存
        </Button>
      </ButtonGroup>
    </TopRow>
    <ItemEditor
      category={data.category}
      segment="subjective"
      onChange={onContentChange}
      onCorpusSelect={onCorpusSelect}
      onSubmitNewCorpus={onSubmitNewCorpus}
      onRemoveCorpus={onRemoveCorpus}
      content={data.subjective}
      corpus={corpus}
    />
    <ItemEditor
      category={data.category}
      segment="objective"
      onChange={onContentChange}
      onCorpusSelect={onCorpusSelect}
      onSubmitNewCorpus={onSubmitNewCorpus}
      onRemoveCorpus={onRemoveCorpus}
      content={data.objective}
      corpus={corpus}
    />
    <ItemEditor
      category={data.category}
      segment="assessment"
      hasSeverityBar
      onChange={onContentChange}
      onSeveritySelect={onSeveritySelect}
      severity={data.severity}
      onCorpusSelect={onCorpusSelect}
      onSubmitNewCorpus={onSubmitNewCorpus}
      onRemoveCorpus={onRemoveCorpus}
      content={data.assessment}
      corpus={corpus}
      selectedAssessment={data.selectedAssessment}
    />
    <ItemEditor
      category={data.category}
      segment="plan"
      onChange={onContentChange}
      onCorpusSelect={onCorpusSelect}
      onSubmitNewCorpus={onSubmitNewCorpus}
      onRemoveCorpus={onRemoveCorpus}
      content={data.plan}
      corpus={corpus}
      dependence={data.selectedAssessment}
    />
  </Wrapper>
)

EditModal.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onSeveritySelect: PropTypes.func.isRequired,
  onSubmitNewCorpus: PropTypes.func.isRequired,
  onRemoveCorpus: PropTypes.func.isRequired,
  onCorpusSelect: PropTypes.func.isRequired,
  onFollowUpDateSelect: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  corpus: PropTypes.array,
}

export default EditModal

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ButtonGroup = styled.div`
  > button {
    margin-left: 20px;
  }
`
