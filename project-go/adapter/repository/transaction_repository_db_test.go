package repository

import (
	"os"
	"testing"

	fixture "github.com/elvesbd/gateway/adapter/repository/fixture/sql"
	"github.com/elvesbd/gateway/domain/entity"
	"github.com/stretchr/testify/assert"
)

func TestTransactionRepositoryDbInsert(t *testing.T) {
	migrationDir := os.DirFS("fixture/sql")
	db := fixture.Up(migrationDir)
	defer fixture.Down(db, migrationDir)

	repository := NewTransactionRepositoryDb(db)
	err := repository.Insert("1", "2", 12.1, entity.APPROVED, "")
	assert.Nil(t, err)
}
