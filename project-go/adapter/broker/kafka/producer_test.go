package kafka

import (
	"testing"

	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/elvesbd/gateway/adapter/presenter/transaction"
	"github.com/elvesbd/gateway/domain/entity"
	process_transaction "github.com/elvesbd/gateway/usecase/proccess_transaction"
	"github.com/stretchr/testify/assert"
)

func TestProducer(t *testing.T) {
	expectedOutput := process_transaction.TransactionDtoOutput{
		ID:           "1",
		Status:       entity.REJECTED,
		ErrorMessage: "you don't have limit for this transaction'",
	}
	//outputJson, _ := json.Marshal(expectedOutput)

	configMap := ckafka.ConfigMap{
		"test.mock.num.brokers": 3,
	}

	producer := NewKafkaProducer(&configMap, transaction.NewTransactionKafkaPresenter())
	err := producer.Publish(expectedOutput, []byte("1"), "test")
	assert.Nil(t, err)
}
