import { CreateServer } from '@b/entity/Entry'
import { MODULES } from '@t/application.config'
MODULES.forEach(module => {
  CreateServer(module)
})

